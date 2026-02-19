
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
        className: `frontis-forms-text-field-wrapper frontis-forms-field-group frontis-forms-form-group ${blockID}`,
    });

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;

    const defaultNameAttribute = `frontis_forms_${fieldType}_${blockID}`;


    return (
        <>
            <style>
                {`
                    ${blockStyle}
                `}
            </style>

            <div {...blockProps}>
                <div className={`frontis-forms-form-group-wrapper frontis-forms-field-group-wrapper ${textFieldGlobalWraperClass && textFieldGlobalWraperClass}`} id={textFieldGlobalWraperID}>
                    {mergeFieldLabelSwitcher && (
                        <div className="frontis-forms-field-label-wrapper frontis-forms-form-label-wrapper">
                            <RichText.Content
                                tagName="label"
                                className="frontis-forms-form-label frontis-forms-field-label"
                                value={fieldLabel ? fieldLabel : fieldType}
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
                            <div className="frontis-forms-field-required-text frontis-forms-help-text frontis-forms-hide">{fieldRequiredText ? fieldRequiredText : 'This field is required'}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default save;


