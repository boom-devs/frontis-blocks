/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, } from "@wordpress/block-editor";
import { useRef, memo , useEffect, useMemo} from "@wordpress/element";
import Inspector from "./inspector";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";


const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

    const {
        blockID,

        // general
        fieldType,
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

        textFieldGlobalWraperID,
        textFieldGlobalWraperClass,

    } = attributes;


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
        className: `frontis-forms-text-field-wrapper frontis-forms-field-group frontis-forms-form-group ${blockID}`,
    });

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;

    const generateDefaultNameAttribute = () => {
        let base = fieldLabel;
        if (!base) {
            base = fieldType || 'text';
        }
        
        // Remove HTML tags if any and sanitization
        base = base.replace(/<[^>]*>?/gm, '');
        
        let slug = base.toString().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
        
        if (!slug.includes('user')) {
             slug = 'user_' + slug;
        }
        return slug;
    };

    const defaultNameAttribute = generateDefaultNameAttribute();


    return (
        <>
            <Inspector {...props} />

            <div {...blockProps}>
                <div className={`frontis-forms-form-group-wrapper frontis-forms-field-group-wrapper ${textFieldGlobalWraperClass && textFieldGlobalWraperClass}`} id={textFieldGlobalWraperID}>
                    {mergeFieldLabelSwitcher && (
                        <div className="frontis-forms-field-label-wrapper frontis-forms-form-label-wrapper">
                            <RichText
                                tagName="label"
                                className="frontis-forms-form-label frontis-forms-field-label"
                                value={fieldLabel ? fieldLabel : fieldType}
                                placeholder={__('Label', 'frontis-forms')}
                                onChange={(value) => setAttributes({ fieldLabel: value })}
                            />
                            {mergeFieldRequiredSwitcher && mergeFieldRequiredSymbolSwitcher && (
                                <span className="frontis-forms-required-symbol">*</span>
                            )}
                        </div>
                    )}
                    <div className="frontis-forms-field-input-wrapper frontis-forms-form-input-wrapper">
                        <div className="frontis-forms-form-input frontis-forms-field-input">
                            <input
                                type={fieldType ? fieldType : 'text'}
                                placeholder={fieldPlaceholder ? fieldPlaceholder : `Enter your ${fieldType} here`}
                                name={fieldCustomNameAttribute ? fieldCustomNameAttribute : defaultNameAttribute}
                                defaultValue={fieldDefaultValue ? fieldDefaultValue : ''}
                                required={mergeFieldRequiredSwitcher ? true : false}
                            />
                            {mergeFieldIconSwitcher && fieldIcon && (
                                <span className="frontis-forms-field-icon">
                                    {renderSVG(fieldIcon)}
                                </span>
                            )}
                        </div>
                        {mergeFieldRequiredSwitcher && (
                            <div className="frontis-forms-field-required-text frontis-forms-help-text">{fieldRequiredText ? fieldRequiredText : 'This field is required'}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Edit);
