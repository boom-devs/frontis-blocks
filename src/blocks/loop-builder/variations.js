/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	titleDate,
	titleExcerpt,
	titleDateExcerpt,
	imageDateTitle,
} from './icons';

const variations = [
	{
		name: 'title-date',
		title: __( 'Title & Date' ),
		icon: titleDate,
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-wrapper',
				{},
				[ [ 'core/post-title' ] ],
			]
		],
		scope: [ 'block' ],
	},
	{
		name: 'title-excerpt',
		title: __( 'Title & Excerpt' ),
		icon: titleExcerpt,
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-wrapper',
				{},
				[ [ 'core/post-title' ], [ 'core/post-excerpt' ] ],
			]
		],
		scope: [ 'block' ],
	},
	{
		name: 'title-date-excerpt',
		title: __( 'Title, Date, & Excerpt' ),
		icon: titleDateExcerpt,
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-wrapper',
				{},
				[
					[ 'core/post-title' ],
					[ 'core/post-date' ],
					[ 'core/post-excerpt' ],
				],
			]
		],
		scope: [ 'block' ],
	},
	{
		name: 'image-date-title',
		title: __( 'Image, Date, & Title' ),
		icon: imageDateTitle,
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-wrapper',
				{},
				[
					[ 'core/post-featured-image' ],
					[ 'core/post-date' ],
					[ 'core/post-title' ],
				],
			]
		],
		scope: [ 'block' ],
	},
];

export default variations;
