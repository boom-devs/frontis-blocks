import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useRef } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as blockEditorStore } from '@wordpress/block-editor';
import './editor.scss';
import Inspector from './inspector';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';
import renderSVG from '../../components/icon-picker/components/icon-picker/controls/renderIcon';


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
        formType,

        submitBtnLabel,
        submitBtnIconSwitcher,
        submitBtnIcon,

        formGlobalWraperID,
        formGlobalWraperClass,

        formDesktopSwitcher,
        formTabletSwitcher,
        formMobileSwitcher,
    } = attributes;


    const blockProps = useBlockProps({
        className: `fb-form-builder-main-wrapper ${blockID} ${formDesktopSwitcher && 'fb-desktop-responsive'} ${formTabletSwitcher && 'fb-tablet-responsive'} ${formMobileSwitcher && 'fb-mobile-responsive'}`,
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

    const isParentOrChildSelected = useSelect(
        (select) => {
            return select(blockEditorStore).hasSelectedInnerBlock(clientId, true);
        },
        [clientId]
    );

    const defaultTemplate = [
        ['frontis-blocks/text-field', {
            fieldType: 'text',
            fieldLabel: __('Name', 'frontis-blocks'),
            fieldCustomNameAttribute: 'user_name',
            fieldPlaceholder: __('Enter your name', 'frontis-blocks'),
            fieldRequiredText: ''
        }],
        ['frontis-blocks/text-field', {
            fieldType: 'email',
            fieldLabel: __('Email', 'frontis-blocks'),
            fieldCustomNameAttribute: 'user_email',
            fieldPlaceholder: __('Enter your email', 'frontis-blocks'),
            fieldRequiredText: ''
        }],
        // ['frontis-blocks/textarea-field', {
        //     label: __('Message', 'frontis-blocks'),
        //     name: 'user_message',
        //     placeholder: __('Write your message here...', 'frontis-blocks'),
        //     required: true
        // }],
    ];


    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div {...blockProps}>
                <form
                    className={`fb-parent-wrapper fb-form-builder-wrapper fb-parent-${blockID} ${classHook} ${formGlobalWraperClass}`} id={formGlobalWraperID} ref={panelRef}
                >
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={hasInnerBlocks ? undefined : defaultTemplate}
                        templateLock={false}
                    />

                    {/* Submit Button */}
                    <div className="fb-field-item fb-form-builder-submit-wrapper">
                        <button isPrimary className="fb-submit-button" onClick={(e) => e.preventDefault()}>
                            <RichText
                                tagName="span"
                                className="fb-submit-button-label"
                                value={submitBtnLabel}
                                placeholder={__('Submit', 'frontis-blocks')}
                                onChange={(value) => setAttributes({ submitBtnLabel: value })}
                            />
                            {submitBtnIconSwitcher && (
                                <span className="fb-submit-button-icon">
                                    {renderSVG(submitBtnIcon)}
                                </span>
                            )}
                        </button>
                    </div>

                    {isSelected || isParentOrChildSelected ? (
                        <div className="fb-add-field-btn-wrapper">
                            <InnerBlocks.ButtonBlockAppender />
                        </div>
                    ) : null}
                </form>
            </div>
        </>
    );
}
