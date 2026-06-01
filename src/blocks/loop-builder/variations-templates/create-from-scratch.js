/**
 * Loop builder layout preset: create-from-scratch
 *
 * Minimal starter: container + post title — user adds the rest.
 * Registered in ../variations.js
 */
import { __ } from '@wordpress/i18n';
import { createFromScratchPreviewIcon } from '../icons';

export default {
	name: 'create-from-scratch',
	title: __( 'Create from Scratch' ),
	description: __(
		'Start with a container and post title, then add your own blocks'
	),
	icon: (
		<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--create-from-scratch">
			{ createFromScratchPreviewIcon }
		</span>
	),
	attributes: {},
	innerBlocks: [
		[
			'frontis-blocks/loop-builder-item',
			{},
			[
				[
					'frontis-blocks/container',
					{
						variationSelected: true,
						loopAutoApplied: true,
						containerGlobalPadding: {
							Desktop: '0',
							Tablet: '0',
							Mobile: '0',
						},
					},
					[
						[
							'frontis-blocks/advanced-heading',
							{
								dynamicTextEnabled: true,
								dynamicTextSource: 'current_post',
								dynamicTextField: 'post_title',
								loopAutoApplied: true,
								headingTag: 'h3',
								dynamicTextEnableLink: true,
								dynamicTextLinkSource: 'post_permalink',
							},
						],
					],
				],
			],
		],
		[ 'frontis-blocks/query-pagination' ],
	],
	scope: [ 'block' ],
};
