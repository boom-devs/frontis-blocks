import { __ } from "@wordpress/i18n";
import { memo } from "@wordpress/element";
import { Placeholder, SelectControl } from "@wordpress/components";
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from "@wordpress/server-side-render";
import './editor.scss';

export default function Edit (props) {
	const { attributes, setAttributes } = props;

	const {
		formId
	} = attributes;

	// console.log(FrontisBlocksData)

	// const formLists = JSON.parse(FrontisBlocksData.fluent_form_lists);
	//
	// const modifiedFormLists = formLists.map((obj, i) => {
	// 	return {
	// 		label: obj.label,
	// 		value: obj.value,
	// 	};
	// });
	return (
		<div {...useBlockProps()}>
			{/*{!formId && (*/}
			{/*	<SelectControl*/}
			{/*		value={formId}*/}
			{/*		options={modifiedFormLists}*/}
			{/*		onChange={(newFormId) =>*/}
			{/*			setAttributes({ formId: newFormId })*/}
			{/*		}*/}
			{/*	/>*/}
			{/*)}*/}

			{/*{formId && (*/}
			{/*	<ServerSideRender*/}
			{/*		className="eb-fluent-form-rendered"*/}
			{/*		block="fluentfom/guten-block"*/}
			{/*		attributes={{ formId: formId }}*/}
			{/*	/>*/}
			{/*)}*/}
		</div>
	);
}
