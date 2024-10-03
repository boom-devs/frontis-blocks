import { __ } from "@wordpress/i18n";
import { memo, useState, useEffect } from "@wordpress/element";
import { Placeholder, SelectControl } from "@wordpress/components";
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from "@wordpress/server-side-render";
import { decodeEntities } from '@wordpress/html-entities';
import './editor.scss';

export default function Edit (props) {
	const [wpCf7Form, setWpCf7Forms] = useState(FrontisBlocksData.contact_form7_html);
	const [selectedForm, setSelectedForm] = useState();
	const { attributes, setAttributes } = props;

	const {
		formId
	} = attributes;

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

		console.log(selectedForm)
	}, [formId] )

	return (
		<>
			<div
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

			{/*	{formId && (*/}
			{/*		<>*/}
			{/*			<div>*/}
			{/*				{decodeEntities('[contact-form-7 id="f56d373" title="Contact form 1"]')}*/}
			{/*			</div>*/}
			{/*		</>*/}
			{/*		// <ServerSideRender*/}
			{/*		// 	className="fb-contact-form-7"*/}
			{/*		// 	block="frontis-block/contact-form-7-gblock"*/}
			{/*		// 	attributes={{formId: formId}}*/}
			{/*		// />*/}
			{/*	)}*/}
			</div>

		</>
	);
}
