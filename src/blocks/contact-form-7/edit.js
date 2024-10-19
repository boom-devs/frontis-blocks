import { __ } from "@wordpress/i18n";
import { memo, useState, useEffect } from "@wordpress/element";
import {SelectControl } from "@wordpress/components";
import {useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from "@wordpress/server-side-render";
import './editor.scss';
import Inspector from "../contact-form-7/inspector";

const Edit = ({ attributes, setAttributes, clientId }) => {
	const [wpCf7Form, setWpCf7Forms] = useState(FrontisBlocksData.contact_form7_html);
	const [selectedForm, setSelectedForm] = useState();

	const {
		formId,
		blockID,
		showLabels,
		showPlaceholder,
		showErrorMessage
	} = attributes;

	const blockProps = useBlockProps({
		className: [
			'fb-contact-form-wrapper',
			blockID,
			!showLabels && 'fb-contact-form-hide-label',
			!showPlaceholder && 'fb-contact-form-hide-placeholder',
			!showErrorMessage && 'fb-contact-form-hide-error-message'
		].filter(Boolean).join(' ')
	});

	const modifiedFormLists = FrontisBlocksData.contact_form7_lists.map((obj, i) => {
		return {
			label: obj.label,
			value: obj.value,
		};
	});

	const selectWcf7Form = (wpcf7Id) => {
		setAttributes({formId: wpcf7Id});
		setSelectedForm(wpCf7Form[formId]);
	}

	useEffect( ( ) => {
		setSelectedForm(wpCf7Form[formId]);
	}, [formId] )


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<div
				{...blockProps}
				dangerouslySetInnerHTML={{__html: selectedForm}}
			/>
			<div {...useBlockProps()}>
				{!selectedForm && (
					<SelectControl
						value={formId}
						options={modifiedFormLists}
						onChange={(newSelectedForm) => selectWcf7Form(newSelectedForm)}
					/>
				)}

			</div>

		</>
	);
}
export default memo(Edit);
