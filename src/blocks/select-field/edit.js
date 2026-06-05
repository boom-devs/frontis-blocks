/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, } from "@wordpress/block-editor";
import { useRef, memo, useEffect, useMemo } from "@wordpress/element";
import Inspector from "./inspector";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateTextFieldStyle from "./styling";


const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

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

    // Generate Block ID
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-text-field',
        isSelected,
        attributes,
        setAttributes
    });

    // Generate Dynamic Styles
    useEffect(() => {
        const styles = generateTextFieldStyle(attributes);
        if (blockStyle !== styles) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes, blockID]);


    useEffect(() => {
        setAttributes({
            inheritedParentBlockID: context["fb/formBuilderParentBlockID"],
            inheritedFieldLabelSwitcher: context["fb/formInheritedLabelSwitcher"],
            inheritedFieldIconSwitcher: context["fb/formInheritedIconSwitcher"],
            inheritedFieldRequiredSwitcher: context["fb/formInheritedRequiredFieldSwitcher"],
            inheritedFieldRequiredSymbolSwitcher: context["fb/formInheritedRequiredSymbolSwitcher"],
            formColumnGap: context["fb/formColumnGap"],
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
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />
            )}

            <div {...blockProps}>
                <div className={`fb-form-group-wrapper fb-field-group-wrapper ${textFieldGlobalWraperClass && textFieldGlobalWraperClass}`} id={textFieldGlobalWraperID}>
                    {mergeFieldLabelSwitcher && (
                        <div className="fb-field-label-wrapper fb-form-label-wrapper">
                            <RichText
                                tagName="label"
                                className="fb-form-label fb-field-label"
                                value={fieldLabel ? fieldLabel : fieldType}
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
                            <select
                                name={fieldCustomNameAttribute ? fieldCustomNameAttribute : defaultNameAttribute}
                                required={mergeFieldRequiredSwitcher ? true : false}
                            >
                                <option value="">{fieldPlaceholder ? fieldPlaceholder : __('Select Item', 'frontis-blocks')}</option>
                                {fieldOptions && fieldOptions.map((item, index) => {
                                    const optValue = item.Title ? item.Title.toString().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') : `option_${index + 1}`;
                                    return (
                                        <option key={item.id || index} value={optValue}>
                                            {item.Title}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="fb-select-field-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>
                            </div>
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
