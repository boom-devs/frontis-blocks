import { __ } from "@wordpress/i18n";
import { memo } from "@wordpress/element";
import { Placeholder, SelectControl } from "@wordpress/components";
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from "@wordpress/server-side-render";
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {

	const {
		blockID,
		DeviceType,
		formId,
		showLabels,
        showPlaceholder,
        showErrorMessage,
	} = attributes;

	const blockProps = useBlockProps({
		className: [
			'fb-fluent-form-wrapper',
			blockID,
			!showLabels && 'fb-fluent-form-hide-label',
			!showPlaceholder && 'fb-fluent-form-hide-placeholder',
			!showErrorMessage && 'fb-fluent-form-hide-error-message'
		].filter(Boolean).join(' ')
	});
	
	const formLists = JSON.parse(FrontisBlocksData.fluent_form_lists);

	const modifiedFormLists = formLists.map((obj, i) => {
		return {
			label: obj.label,
			value: obj.value,
		};
	});
	return (
		<>
			<Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

			<div {...blockProps}>
				{!formId && (
					<SelectControl
						value={formId}
						options={modifiedFormLists}
						onChange={(newFormId) =>
							setAttributes({ formId: newFormId })
						}
					/>
				)}

				{formId && (
					<ServerSideRender
						className="fb-fluent-form-rendered"
						block="fluentfom/guten-block"
						attributes={{ formId: formId }}
					/>
				)}
			</div>
		</>
	);
}
