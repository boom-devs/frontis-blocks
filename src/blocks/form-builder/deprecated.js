import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import renderSVG from '../../components/icon-picker/components/icon-picker/controls/renderIcon';
import attributes from './attributes.js';

/**
 * v1.0.0 - Original version without data-form attributes on the form tag
 * and conditional fb-form-messages.
 */
const v1_0_0 = {
    attributes,

    save({ attributes }) {
        const { 
            blockID,
            blockStyle,
            classHook,
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
            <>
                <style>{`${blockStyle}`}</style>

                <div {...blockProps}>
                    <form
                        className={`fb-parent-wrapper fb-form-builder-wrapper fb-parent-${blockID} ${classHook} ${formGlobalWraperClass}`}
                        id={formGlobalWraperID}
                    >
                        <InnerBlocks.Content />

                        <div className="fb-field-item fb-form-builder-submit-wrapper">
                            <button className="fb-submit-button">
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
            </>
        );
    },
};

/**
 * v1.1.0 - Version with data-form attributes on the form tag
 * but containing the invalid 'isPrimary' prop on the HTML button tag.
 */
const v1_1_0 = {
    attributes,

    save({ attributes }) {
        const { 
            blockID,
            classHook,
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
    },
};

export default [v1_1_0, v1_0_0];