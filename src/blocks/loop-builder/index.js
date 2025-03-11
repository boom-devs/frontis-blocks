import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import metadata from './block.json';
import Inspector from './inspector';


const VARIATION_NAMESPACE = 'frontis-blocks/custom-loop';

registerBlockVariation('core/query', {
	name: VARIATION_NAMESPACE,
	title: __('Loop Builder', 'frontis-blocks'),
	description: __('Display posts with custom layout options', 'frontis-blocks'),
	category: 'frontis-blocks',
	isActive: ({ namespace, query }) => {
		return (
			namespace === VARIATION_NAMESPACE &&
			query.postType === 'post'
		);
	},
	icon: 'grid-view',
	attributes: {
		namespace: VARIATION_NAMESPACE,
		query: {
			perPage: 6,
			pages: 0,
			offset: 0,
			postType: 'post',
			order: 'desc',
			orderBy: 'date',
			author: '',
			search: '',
			exclude: [],
			sticky: '',
			inherit: false,
		},
		displayLayout: {
			type: 'flex',
			columns: 3
		}
	},
	innerBlocks: [
		[
			'core/post-template',
			{},
			[
				['core/post-featured-image'],
				['frontis-blocks/advanced-heading'],
				['core/post-excerpt', { moreText: 'Read More' }]
			],
		],
		['core/query-no-results', {}, [['core/paragraph', { content: 'No posts found.' }]]],
	],
	scope: ['inserter'],
	allowedControls: ['inherit', 'order', 'taxQuery', 'search'],
});

// Add filter to customize the Query Loop when your variation is active
wp.hooks.addFilter(
	'editor.BlockEdit',
	'frontis-blocks/with-loop-builder-controls',
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			// Only apply to Query Loop block with your namespace
			if (props.name === 'core/query' && props.attributes.namespace === VARIATION_NAMESPACE) {
				return (
					<>
						<BlockEdit {...props} />
						<Inspector
							attributes={props.attributes}
							setAttributes={props.setAttributes}
							clientId={props.clientId}
						/>
					</>
				);
			}
			return <BlockEdit {...props} />;
		};
	}, 'withLoopBuilderControls')
);

// Add filter to specify the category for your Query variation
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'frontis-blocks/set-block-category',
	(settings, name) => {
		if (name === 'core/query' && settings.variations) {
			const updatedVariations = settings.variations.map(variation => {
				if (variation.name === VARIATION_NAMESPACE) {
					return {
						...variation,
						category: 'frontis-blocks'
					};
				}
				return variation;
			});

			return {
				...settings,
				variations: updatedVariations
			};
		}
		return settings;
	}
);