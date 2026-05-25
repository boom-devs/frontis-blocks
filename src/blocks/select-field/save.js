
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

        fieldOptions,
    } = attributes;


    const blockProps = useBlockProps.save({
        className: `fb-text-field-wrapper fb-field-group fb-form-group ${blockID}`,
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
             slug = slug;
        }
        return slug;
    };

    const defaultNameAttribute = generateDefaultNameAttribute();


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
                        <select
                            name={fieldCustomNameAttribute ? fieldCustomNameAttribute : defaultNameAttribute}
                            required={mergeFieldRequiredSwitcher ? true : false}
                        >
                            <option value="">{fieldPlaceholder ? fieldPlaceholder : 'Select Item'}</option>
                            {fieldOptions && fieldOptions.map((item, index) => {
                                const optValue = item.Title ? item.Title.toString().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') : `option_${index + 1}`;
                                return (
                                    <option key={item.id || index} value={optValue}>
                                        {item.Title}
                                    </option>
                                );
                            })}
                        </select>
                        <div className="fb-select-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
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


