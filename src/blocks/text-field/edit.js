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
        parentBlockID ,
        blockID,
        inheritedFieldType,
        inheritedIconSwitcher,
        inheritedLabelSwitcher,
        inheritedLabel,
        inheritedPlaceholderSwitcher,
        inheritedPlaceholder,
        inheritedRequiredFieldSwitcher,
        inheritedRequiredSymbolSwitcher,
        inheritedRequiredText,

        textFieldGlobalWraperID,
        textFieldGlobalWraperClass,

    } = attributes;


    useEffect(() => {
        setAttributes({
            inheritedFieldType:  context["fb/formInheritedFieldType"],
            inheritedIconSwitcher: context["fb/formInheritedIconSwitcher"],
            inheritedLabelSwitcher: context["fb/formInheritedLabelSwitcher"],
            inheritedLabel: context["fb/formInheritedLabel"],
            inheritedPlaceholderSwitcher: context["fb/formInheritedPlaceholderSwitcher"],
            inheritedPlaceholder: context["fb/formInheritedPlaceholder"],
            inheritedRequiredFieldSwitcher: context["fb/formInheritedRequiredFieldSwitcher"],
            inheritedRequiredSymbolSwitcher: context["fb/formInheritedRequiredSymbolSwitcher"],
            inheritedRequiredText: context["fb/formInheritedRequiredText"],
        })
    }, [
        context["fb/formInheritedFieldType"],
        context["fb/formInheritedDisplayIcon"],
        context["fb/formInheritedLabelSwitcher"],
        context["fb/formInheritedLabelSwitcher"],
        context["fb/formInheritedPlaceholderSwitcher"],
        context["fb/formInheritedPlaceholder"],
        context["fb/formInheritedRequiredFieldSwitcher"],
        context["fb/formInheritedRequiredSymbolSwitcher"],
        context["fb/formInheritedRequiredText"],
    ])

    const blockProps = useBlockProps({
        className: `fb-text-field-wrapper fb-form-group ${parentBlockID} ${blockID}`,
    });

    return (
        <>
            <Inspector {...props} />

            <div {...blockProps}>
                <div className="fb-form-group-wrapper">
                    <div className="fb-form-label-wrapper">
                        {inheritedLabelSwitcher && (
                            <label className="fb-form-label fb-text-field-label">
                                {inheritedLabel}
                            </label>
                        )}
                        {inheritedRequiredFieldSwitcher && inheritedRequiredSymbolSwitcher && (
                            <span className="fb-required-symbol">*</span>
                        )}
                    </div>
                    <div className="fb-form-input-wrapper">
                        <input
                            type={inheritedFieldType}
                            className="fb-form-input fb-text-field-input"
                            placeholder={inheritedPlaceholderSwitcher ? inheritedPlaceholder : ''}
                        />
                        {inheritedRequiredFieldSwitcher && !inheritedRequiredSymbolSwitcher && (
                            <div className="fb-required-text">{inheritedRequiredText}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Edit);
