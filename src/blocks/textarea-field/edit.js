/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, } from "@wordpress/block-editor";
import { useRef, memo , useEffect, useMemo} from "@wordpress/element";
import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import generateTextareaFieldStyle from "./styling";


const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

    const {
        blockID,
        blockStyle,

        // general
        fieldLabelSwitcher,
        fieldLabel,
        fieldIconSwitcher,
        fieldIcon,
        fieldPlaceholderSwitcher,
        fieldPlaceholder,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,
        fieldRequiredText,
        fieldDefaultValue,
        fieldCustomNameAttribute,

        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,

        textareaFieldGlobalWraperID,
        textareaFieldGlobalWraperClass,

    } = attributes;

    // Generate Block ID
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-textarea-field',
        isSelected,
        attributes,
        setAttributes
    });

    // Generate Dynamic Styles
    useEffect(() => {
        const styles = generateTextareaFieldStyle(attributes);
        if (blockStyle !== styles) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes, blockID]);

    useEffect(() => {
        setAttributes({
            inheritedParentBlockID:  context["fb/formBuilderParentBlockID"],
            inheritedFieldLabelSwitcher: context["fb/formInheritedLabelSwitcher"],
            inheritedFieldIconSwitcher: context["fb/formInheritedIconSwitcher"],
            inheritedFieldRequiredSwitcher: context["fb/formInheritedRequiredFieldSwitcher"],
            inheritedFieldRequiredSymbolSwitcher: context["fb/formInheritedRequiredSymbolSwitcher"],
        })
    }, [
        context["fb/formBuilderParentBlockID"],
        context["fb/formInheritedIconSwitcher"],
        context["fb/formInheritedLabelSwitcher"],
        context["fb/formInheritedRequiredFieldSwitcher"],
        context["fb/formInheritedRequiredSymbolSwitcher"],
    ])

    const blockProps = useBlockProps({
        className: `fb-textarea-field-wrapper fb-field-group fb-form-group ${blockID}`,
    });

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;

    const generateDefaultNameAttribute = () => {
        let base = fieldLabel;
        if (!base) {
            base = 'textarea';
        }
        
        // Remove HTML tags if any and sanitization
        base = base.replace(/<[^>]*>?/gm, '');
        
        let slug = base.toString().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
        
        if (!slug.includes('user')) {
             slug = slug;
        }
        return slug;
    };

    const defaultNameAttribute = generateDefaultNameAttribute();


    return (
        <>
            {isSelected && (
                <Inspector 
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId} 
                />
            )}

            <div {...blockProps}>
                <div className={`fb-form-group-wrapper fb-field-group-wrapper ${textareaFieldGlobalWraperClass && textareaFieldGlobalWraperClass}`} id={textareaFieldGlobalWraperID}>
                    {mergeFieldLabelSwitcher && (
                        <div className="fb-field-label-wrapper fb-form-label-wrapper">
                            <RichText
                                tagName="label"
                                className="fb-form-label fb-field-label"
                                value={fieldLabel ? fieldLabel : 'Message'}
                                placeholder={__('Label', 'frontis-forms')}
                                onChange={(value) => setAttributes({ fieldLabel: value })}
                            />
                            {mergeFieldRequiredSwitcher && mergeFieldRequiredSymbolSwitcher && (
                                <span className="fb-required-symbol">*</span>
                            )}
                        </div>
                    )}
                    <div className="fb-field-input-wrapper fb-form-input-wrapper">
                        <div className="fb-form-input fb-field-input">
                            <textarea
                                placeholder={fieldPlaceholder ? fieldPlaceholder : `Enter your message here`}
                                name={fieldCustomNameAttribute ? fieldCustomNameAttribute : defaultNameAttribute}
                                defaultValue={fieldDefaultValue ? fieldDefaultValue : ''}
                                required={mergeFieldRequiredSwitcher ? true : false}
                            />
                            {mergeFieldIconSwitcher && fieldIcon && (
                                <span className="fb-field-icon">
                                    {renderSVG(fieldIcon)}
                                </span>
                            )}
                        </div>
                        {mergeFieldRequiredSwitcher && (
                            <div className="fb-field-required-text fb-help-text">{fieldRequiredText ? fieldRequiredText : 'This field is required'}</div>
                        )}
                    </div>
                </div>
            </div>

            <style>{blockStyle}</style>
        </>
    );
}

export default memo(Edit);
