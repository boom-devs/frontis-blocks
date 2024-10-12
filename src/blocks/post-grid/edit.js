import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BoxShadowControl from '@Components/box-shadow';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { boxShadowValues, boxShadowCSS } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'text-domain')}>
                    <FB_BoxShadowControl
                        onBoxShadowChange={(value) => setAttributes({ boxShadowValues: value })}
                        initialShadowValue={boxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ boxShadowCSS: value })}
                    />
                </PanelBody>
            </InspectorControls>

            {/* Dynamic style block to apply box-shadow */}
            <style>
                {`
                    .customBoxShadow {
                        box-shadow: ${boxShadowCSS};
                    }
                `}
            </style>

            {/* Block content with box-shadow applied */}
            <p {...useBlockProps()} className="customBoxShadow">
                {__('This is post grid', 'text-domain')}
            </p>
        </>
    );
}
