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
				[
					[
						'frontis-blocks/container',
						{
							variationSelected: true,
						},
						[ 
							[ 
								'frontis-blocks/advanced-image',
								{
									dynamicImageEnabled: true,
									dynamicImageSource: 'current_post',
									dynamicImageEnableLink: true,
									dynamicImageLinkSource: 'post_permalink',
									loopAutoApplied: true,
									autoFitSwitch: true,
									mediaHeight: { 
										Desktop: "200", 
										Tablet: "200", 
										Mobile: "200" 
									},
									mediaHeightUnits: { 
										Desktop: "px", 
										Tablet: "px", 
										Mobile: "px" 
									},
									globalMarginDesktop: {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},
									globalMarginTablet : {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},
									globalMarginMobile : {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},

								}
							],
							[ 
								'frontis-blocks/advanced-heading',
								{
									dynamicTextEnabled: true,
									dynamicTextSource: 'current_post',
									dynamicTextField: 'post_date',
									loopAutoApplied: true,
									headingTag: 'p',
									headingFontSize: { 
										Desktop: "14", 
										Tablet: "14", 
										Mobile: "14" 
									}

								}
							],
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
									headingDesktopPadding : {
										top: '8',
										right: '0',
										bottom: '8',
										left: '0',
									},
									headingTabPadding: {
										top: '8',
										right: '0',
										bottom: '8',
										left: '0',
									},
									headingMobilePadding: {
										top: '8',
										right: '0',
										bottom: '8',
										left: '0',
									}
								}
							],
							[ 
								'frontis-blocks/advanced-heading',
								{
									dynamicTextEnabled: true,
									dynamicTextSource: 'current_post',
									dynamicTextField: 'post_excerpt',
									loopAutoApplied: true,
									headingTag: 'p',
									headingFontSize: { 
										Desktop: "14", 
										Tablet: "14", 
										Mobile: "14" 
									}
								}
							],
						 ],
					],
				],
			],
			[ 'frontis-blocks/query-pagination' ]
		],
		scope: [ 'block' ],
	},
	// {
	// 	name: 'title-excerpt',
	// 	title: __( 'Title & Excerpt' ),
	// 	icon: titleExcerpt,
	// 	attributes: {},
	// 	innerBlocks: [
	// 		[
	// 			'frontis-blocks/loop-builder-wrapper',
	// 			{},
	// 			[
	// 				[
	// 					'frontis-blocks/container',
	// 					{
	// 						variationSelected: true,
	// 					},
	// 					[ [ 'core/post-title' ], [ 'core/post-excerpt' ] ],
	// 				],
	// 			],
	// 		]
	// 	],
	// 	scope: [ 'block' ],
	// },
	// {
	// 	name: 'title-date-excerpt',
	// 	title: __( 'Title, Date, & Excerpt' ),
	// 	icon: titleDateExcerpt,
	// 	attributes: {},
	// 	innerBlocks: [
	// 		[
	// 			'frontis-blocks/loop-builder-wrapper',
	// 			{},
	// 			[
	// 				[
	// 					'frontis-blocks/container',
	// 					{
	// 						variationSelected: true,
	// 					},
	// 					[
	// 						[ 'core/post-title' ],
	// 						[ 'core/post-date' ],
	// 						[ 'core/post-excerpt' ],
	// 					],
	// 				],
	// 			],
	// 		]
	// 	],
	// 	scope: [ 'block' ],
	// },
	// {
	// 	name: 'image-date-title',
	// 	title: __( 'Image, Date, & Title' ),
	// 	icon: imageDateTitle,
	// 	attributes: {},
	// 	innerBlocks: [
	// 		[
	// 			'frontis-blocks/loop-builder-wrapper',
	// 			{},
	// 			[
	// 				[
	// 					'frontis-blocks/container',
	// 					{
	// 						variationSelected: true,
	// 					},
	// 					[
	// 						[ 'core/post-featured-image' ],
	// 						[ 'core/post-date' ],
	// 						[ 'core/post-title' ],
	// 					],
	// 				],
	// 			],
	// 		]
	// 	],
	// 	scope: [ 'block' ],
	// },
];

export default variations;
