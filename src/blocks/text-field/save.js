
import { RichText, useBlockProps } from "@wordpress/block-editor";
import './style.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

const save = ({ attributes }) => {

    const {
        blockID,
        blockStyle,

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


    const blockProps = useBlockProps.save({
        className: `fb-text-field-wrapper fb-field-group fb-form-group ${blockID}`,
    });

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;

    const defaultNameAttribute = `frontis_forms_${fieldType}_${blockID}`;


    return (
        <div {...blockProps}>
            <div className={`fb-form-group-wrapper fb-field-group-wrapper ${textFieldGlobalWraperClass && textFieldGlobalWraperClass}`} id={textFieldGlobalWraperID}>
                {mergeFieldLabelSwitcher && (
                    <div className="fb-field-label-wrapper fb-form-label-wrapper">
                        <RichText.Content
                            tagName="label"
                            className="fb-form-label fb-field-label"
                            value={fieldLabel ? fieldLabel : fieldType}
                        />
                        {mergeFieldRequiredSwitcher && mergeFieldRequiredSymbolSwitcher && (
                            <span className="fb-required-symbol">*</span>
                        )}
                    </div>
                )}
                <div className="fb-field-input-wrapper fb-form-input-wrapper">
                    <div className="fb-form-input fb-field-input">
                        <input
                            type={fieldType ? fieldType : 'text'}
                            placeholder={fieldPlaceholder ? fieldPlaceholder : `Enter your ${fieldType} here`}
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
                        <div className="fb-field-required-text fb-help-text fb-hide">{fieldRequiredText ? fieldRequiredText : 'This field is required'}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default save;


