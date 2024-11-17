/**
 * Internal dependencies
 */
import FB_Block_Icons from '@Config/fb-blocks-icons';
import { __experimentalBlockVariationPicker as BlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import rowIcons from './icons';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
export const variations = [
	{
		name: 'one-column',
		icon: rowIcons[ '100' ],
		attributes: {
			variationSelected: true,
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		icon: rowIcons[ '50-50' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		isDefault: true,
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		icon: rowIcons[ '33-33-33' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		icon: rowIcons[ '25-25-25-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_50-50',
		icon: rowIcons[ '50-50_50-50' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		icon: rowIcons[ '25-75' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33-33_33-33-33',
		icon: rowIcons[ '33-33-33_33-33-33' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-wider-center',
		icon: rowIcons[ '25-50-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		icon: rowIcons[ '75-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '75-25_25_75',
		icon: rowIcons[ '75-25_25_75' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_100',
		icon: rowIcons[ '50-50_100' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[
				'frontis-blocks/container',
				{ widthDesktop: 100, widthSetByUser: true, directionDesktop: 'row' },
				[
					[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
					[ 'frontis-blocks/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
				],
			],
			[ 'frontis-blocks/container', { widthDesktop: 100, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '25-75_75-25',
		icon: rowIcons[ '25-75_75-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
			[ 'frontis-blocks/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
];

export const VariationPicker = ( props ) => {
	const { clientId, setAttributes, defaultVariation } = props;
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	return (
		<div {...useBlockProps()} className="frontis-blocks-container-variation-picker">
			<BlockVariationPicker
				icon={ FB_Block_Icons.container }
				label={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
				instructions={
					__(
						'Select a container layout to start with.',
						'ultimate-addons-for-gutenberg'
					)
				}
				variations={ variations }
				onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
			/>
		</div>
	);
};
