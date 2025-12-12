// Elements
import {__} from "@wordpress/i18n";
import { ColorIndicator } from '@wordpress/components';
import { useCallback, useRef, useState } from '@wordpress/element';
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';

export default function FrontisColorPanel() {

	let colorsVar = frontisBlocksAdmin?.global_styles;

	// const features = wp.data.select( 'core/block-editor' ).getFeatures();
	const features = wp.data.select('core').getSettings().__experimentalFeatures;

	const elements = [
		{
			name: 'text',
			label: __( 'Text', 'frontis-blocks' ),
		},
		{
			name: 'background',
			label: __( 'Background', 'frontis-blocks' ),
		},
		{
			name: 'link',
			label: __( 'Link', 'frontis-blocks' ),
		},
		{
			name: 'caption',
			label: __( 'Captions', 'frontis-blocks' ),
		},
		{
			name: 'button',
			label: __( 'Button', 'frontis-blocks'  ),
		},
		{
			name: 'heading',
			label: __( 'Heading', 'frontis-blocks' ),
		},
		{
			name: 'h1',
			label: __( 'H1', 'frontis-blocks' )
		},
		{
			name: 'h2',
			label: __( 'H2', 'frontis-blocks' )
		},
		{
			name: 'h3',
			label: __( 'H3', 'frontis-blocks' )
		},
		{
			name: 'h4',
			label: __( 'H4', 'frontis-blocks' )
		},
		{
			name: 'h5',
			label: __( 'H5', 'frontis-blocks' )
		},
		{
			name: 'h6',
			label: __( 'H6', 'frontis-blocks' )
		},
	];

	const [ mode, setMode ] = useState( 'visual' );
	const choices = [
		{
			value: 'visual',
			label: 'Visual editor',
		},
		{
			value: 'text',
			label: 'Code editor',
		},
	];

	return (
		<>
			<MenuGroup label="Editor">
				<MenuItemsChoice
					choices={ choices }
					value={ mode }
					onSelect={ ( newMode ) => setMode( newMode ) }
				/>
			</MenuGroup>
			<div className={'frontis-global-colors'}>
				{elements.map( (element, index) => (
					<><ColorIndicator colorValue="#0073aa" /></>
				) )}
			</div>
		</>
	)

}
