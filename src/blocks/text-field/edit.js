/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, MediaUpload, RichText, } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
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

        inheritedFieldType,
        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldLabel,
        inheritedFieldPlaceholderSwitcher,
        inheritedFieldPlaceholder,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,
        inheritedFieldRequiredText,

        textFieldGlobalWraperID,
        textFieldGlobalWraperClass,

    } = attributes;


    useEffect(() => {
        setAttributes({
            inheritedFieldType:  context["fb/formInheritedFieldType"],
            inheritedFieldLabelSwitcher: context["fb/formInheritedLabelSwitcher"],
            inheritedFieldLabel: context["fb/formInheritedLabel"],
            inheritedFieldPlaceholder: context["fb/formInheritedPlaceholder"],
            inheritedFieldIconSwitcher: context["fb/formInheritedIconSwitcher"],
            inheritedFieldRequiredSwitcher: context["fb/formInheritedRequiredFieldSwitcher"],
            inheritedFieldRequiredSymbolSwitcher: context["fb/formInheritedRequiredSymbolSwitcher"],
            inheritedFieldRequiredText: context["fb/formInheritedRequiredText"],
        })
    }, [
        context["fb/formInheritedFieldType"],
        context["fb/formInheritedIconSwitcher"],
        context["fb/formInheritedLabelSwitcher"],
        context["fb/formInheritedLabel"],
        context["fb/formInheritedPlaceholder"],
        context["fb/formInheritedRequiredFieldSwitcher"],
        context["fb/formInheritedRequiredSymbolSwitcher"],
        context["fb/formInheritedRequiredText"],
    ])

    const blockProps = useBlockProps({
        className: `fb-text-field-wrapper fb-field-group fb-form-group ${blockID}`,
    });

    const mergeFieldType = fieldType ? fieldType : inheritedFieldType;
    const mergeFieldLabelSwitcher = fieldLabelSwitcher ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldLabel = fieldLabel ? fieldLabel : inheritedFieldLabel;
    const mergeFieldPlaceholder = fieldPlaceholder ? fieldPlaceholder : inheritedFieldPlaceholder;
    const mergeFieldIconSwitcher = fieldIconSwitcher ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;
    const mergeFieldRequiredText = fieldRequiredText ? fieldRequiredText : inheritedFieldRequiredText;

    const defaultNameAttribute = `fb_${mergeFieldType}_${blockID}`;


    return (
        <>
            <Inspector {...props} />

            <div {...blockProps}>
                <div className="fb-form-group-wrapper fb-field-group-wrapper">
                    {mergeFieldLabelSwitcher && (
                        <div className="fb-form-label-wrapper">
                            <RichText
                                tagName="label"
                                className="fb-form-label fb-text-field-label"
                                value={mergeFieldLabel ? mergeFieldLabel : 'Label'}
                                onChange={(value) => setAttributes({ fieldLabel: value })}
                            />
                            {mergeFieldRequiredSymbolSwitcher && (
                                <span className="fb-required-symbol">*</span>
                            )}
                        </div>
                    )}
                    <div className="fb-form-input-wrapper">
                        <div className="fb-form-input fb-text-field-input">
                            <input
                                type={mergeFieldType ? mergeFieldType : 'text'}
                                placeholder={mergeFieldPlaceholder ? mergeFieldPlaceholder : 'Enter your text here'}
                                name={fieldCustomNameAttribute ? fieldCustomNameAttribute : defaultNameAttribute}
                                defaultValue={fieldDefaultValue ? fieldDefaultValue : ''}
                                required={mergeFieldRequiredSwitcher ? true : false}
                            />
                            {mergeFieldIconSwitcher && fieldIcon && (
                                <span className="fb-text-field-icon fb-field-icon">
                                    {renderSVG(fieldIcon)}
                                </span>
                            )}
                        </div>
                        {mergeFieldRequiredSwitcher && (
                            <div className="fb-field-required-text fb-help-text">{mergeFieldRequiredText ? mergeFieldRequiredText : 'This field is required'}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Edit);
