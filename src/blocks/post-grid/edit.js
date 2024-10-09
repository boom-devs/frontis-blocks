
import { __ } from '@wordpress/i18n';


import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BoxShadowControl from '@Components/box-shadow';
import './editor.scss';

export default function Edit (props) {
	const { attributes, setAttributes } = props;
	const {
		boxShadow,
	} = attributes;

	const testboxShadowHandler = (newBoxShadow) => {
		setAttributes({ boxShadow: newBoxShadow.join(' ') });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Settings', 'text-domain') }>
					<FB_BoxShadowControl boxShadowHandler={testboxShadowHandler} />
				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()} style={{ boxShadow: boxShadow }}>
				{__('This is post grid', 'text')}
			</p>

		</>
	);
}
