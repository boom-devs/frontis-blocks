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
        className: `fb-text-field-wrapper fb-field-group fb-form-group ${blockID}`,
    });

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;

    const defaultNameAttribute = `fb_${fieldType}_${blockID}`;


    return (
        <>
            <Inspector {...props} />

            <div {...blockProps}>
                <div className={`fb-form-group-wrapper fb-field-group-wrapper ${textFieldGlobalWraperClass}`} id={textFieldGlobalWraperID}>
                    {mergeFieldLabelSwitcher && (
                        <div className="fb-field-label-wrapper fb-form-label-wrapper">
                            <RichText
                                tagName="label"
                                className="fb-form-label fb-field-label"
                                value={fieldLabel ? fieldLabel : fieldType}
                                placeholder={__('Label', 'frontis-blocks')}
                                onChange={(value) => setAttributes({ fieldLabel: value })}
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
                            <div className="fb-field-required-text fb-help-text">{fieldRequiredText ? fieldRequiredText : 'This field is required'}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Edit);
