import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import {
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// if not excluded then it causes render error as adding custom attributes to these blocks are prohibited.
const includeBlock = [
	'core/template-part',
];

const TemplatePartSettings = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, name, setAttributes } = props;

		
		// Adding compatibility with frontis plugin. So the slugs are same as the plugin.
		const { area } = attributes;

		if ( name && name.includes( 'core/' ) && includeBlock.includes( name ) ) {
			console.log("attributes", attributes);
			return (
				<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<Panel>
							<PanelBody
								title="Template Part Settings"
								initialOpen={ true }
							>
								<PanelRow>
									<ToggleControl
										label={ __(
											'Header',
											'frontis-block'
										) }
										checked={ area === 'header' }
										onChange={ () =>
											setAttributes( {
												area: 'header',
											} )
										}
									/>
								</PanelRow>

								<PanelRow>
									<ToggleControl
										label={ __( 'Footer', 'frontis-block' ) }
										checked={ area === 'footer' }
										onChange={ () =>
											setAttributes( {
												area: 'footer',
											} )
										}
									/>
								</PanelRow>
							</PanelBody>
						</Panel>
					</InspectorControls>
				</>
			);
		}
		return (
			<>
				<BlockEdit { ...props } />
			</>
		);
	};
}, 'TemplatePartSettings' );

addFilter( 'editor.BlockEdit', 'frontis-blocks/template-part-settings', TemplatePartSettings );

function ResponsiveAttributes( settings ) {
	const { name, attributes } = settings;

	if ( name && name.includes( 'core/' ) && includeBlock.includes( name ) ) {
		if ( attributes ) {
			settings.attributes = Object.assign( attributes, {
				area: {
					type: 'string',
					default: '',
				},
			} );
		}
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'frontis-blocks/template-part-attributes',
	ResponsiveAttributes
);